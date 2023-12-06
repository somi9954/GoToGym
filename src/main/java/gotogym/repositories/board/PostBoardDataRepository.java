package gotogym.repositories.board;

import gotogym.entities.board.PostBoardData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

public interface PostBoardDataRepository extends JpaRepository<PostBoardData, Long>, QuerydslPredicateExecutor<PostBoardData> {
}
