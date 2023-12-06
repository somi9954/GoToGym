package gotogym.models.board;

import gotogym.api.board.BoardForm;
import gotogym.configs.jwt.CustomJwtFilter;
import gotogym.entities.board.Board;
import gotogym.entities.board.PostBoardData;
import gotogym.models.board.config.BoardConfigInfoService;
import gotogym.repositories.board.PostBoardDataRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BoardDataSaveService {

    private final BoardValidator validator;
    private final BoardConfigInfoService configInfoService;
    private final PostBoardDataRepository repository;
    private final HttpServletRequest request;
    private final PasswordEncoder passwordEncoder;
    private final CustomJwtFilter customJwtFilter;


    public void save(BoardForm boardForm) {
        validator.check(boardForm);

        // 게시글 저장 처리 - 추가, 수정
        /**
         * 1. 게시판 설정 - 글 작성, 수정 권한 체크.
         *                - 수정 -> 본인이 작성한 글인지
         * 2. 게시글 저장 수정
         * 3. 회원 정보 - 게시글 등록시에만 저장
         */
        Long id = boardForm.getId();
        Board board = configInfoService.get(boardForm.getBId(), id == null ? "write":"update");


        PostBoardData boardData = null;
        if (id == null) { // 게시글 추가
            String ip = request.getRemoteAddr();
            String ua = request.getHeader("User-Agent");
            boardData = PostBoardData.builder()
                    .gid(boardForm.getGid())
                    .board(board)
                    .category(boardForm.getCategory())
                    .writer(boardForm.getWriter())
                    .subject(boardForm.getSubject())
                    .content(boardForm.getContent())
                    .ip(ip)
                    .ua(ua)
                    .build();


            if (customJwtFilter.isUserLoggedIn()) { // 로그인 시 - 회원 데이터
                boardData.setMember(customJwtFilter.getEntity());
            } else { // 비회원 비밀번호
                boardData.setGuestPw(passwordEncoder.encode(boardForm.getGuestPw()));
            }

        } else  { // 게시글 수정
            boardData.setWriter(boardForm.getWriter());
            boardData.setSubject(boardForm.getSubject());
            boardData.setContent(boardForm.getContent());
            boardData.setCategory(boardForm.getCategory());
            String guestPw = boardForm.getGuestPw();
            if (boardData.getMember() == null && guestPw != null && !guestPw.isBlank()) {
                boardData.setGuestPw(passwordEncoder.encode(guestPw));
            }
        }

        boardData = repository.saveAndFlush(boardData);
        boardForm.setId(boardData.getId());
    }
}
