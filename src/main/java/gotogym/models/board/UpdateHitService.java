package gotogym.models.board;

import gotogym.configs.jwt.CustomJwtFilter;
import gotogym.entities.board.BoardView;
import gotogym.entities.board.PostBoardData;
import gotogym.repositories.BoardViewRepository;
import gotogym.repositories.board.PostBoardDataRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Objects;

/**
 * 조회수 업데이트
 *
 */

@Service
@RequiredArgsConstructor
public class UpdateHitService {
    private final BoardViewRepository boardViewRepository;
    private final PostBoardDataRepository boardDataRepository;
    private final HttpServletRequest request;
    private final CustomJwtFilter jwtFilter;

    public void update(Long id) {
        try {
            BoardView boardView = new BoardView();
            boardView.setId(id);
            boardView.setUid(""+getUid());
            boardViewRepository.saveAndFlush(boardView);

        } catch (Exception e) {}

        long cnt = boardViewRepository.getHit(id);
        PostBoardData boardData = boardDataRepository.findById(id).orElse(null);
        if (boardData != null) {
            boardData.setHit((int)cnt);
            boardDataRepository.flush();
        }

    }

    private int getUid() {
        String ip = request.getRemoteAddr();
        String ua = request.getHeader("User-Agent");

        return jwtFilter.isUserLoggedIn() ? jwtFilter.getMember().getUserNo().intValue() : Objects.hash(ip, ua);
    }
}