package gotogym.models.board;

import gotogym.configs.jwt.CustomJwtFilter;
import gotogym.entities.board.PostBoardData;
import gotogym.models.board.config.BoardConfigInfoService;
import gotogym.repositories.board.PostBoardDataRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BoardDataInfoService {

    private final PostBoardDataRepository boardDataRepository;
    private final BoardConfigInfoService configInfoService;
    private final CustomJwtFilter customJwtFilter;

    public PostBoardData get(Long id) {
        return get(id, "view");
    }

    public PostBoardData get(Long id, String location) {

        PostBoardData boardData = boardDataRepository.findById(id).orElseThrow(BoardDataNotExistsException::new);

        // 게시판 설정 조회 + 접근 권한체크
        configInfoService.get(boardData.getBoard().getBId(), location);

        // 게시글 삭제 여부 체크 (소프트 삭제)
        if (!customJwtFilter.isUserAdmin() && boardData.getDeletedAt() != null) {
            throw new BoardDataNotExistsException();
        }

        return boardData;
    }
}