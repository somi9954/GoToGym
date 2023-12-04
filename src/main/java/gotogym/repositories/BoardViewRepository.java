package gotogym.repositories;

import gotogym.entities.board.BoardView;
import gotogym.entities.board.BoardViewId;
import gotogym.entities.board.QBoardView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

public interface BoardViewRepository extends JpaRepository<BoardView, BoardViewId>, QuerydslPredicateExecutor<BoardView> {
    /**
     * 게시글별 조회수 조회
     *
     * @param id
     * @return
     */
    default long getHit(Long id) {
        QBoardView boardView = QBoardView.boardView;
        return count(boardView.id.eq(id));
    }
}