package gotogym.models.board;

import gotogym.commons.exceptions.CommonException;
import org.springframework.http.HttpStatus;

public class BoardDataNotExistsException extends CommonException {
    public BoardDataNotExistsException() {
        super(bundleValidation.getString("Validation.boardData.notExists"), HttpStatus.BAD_REQUEST);
    }
}