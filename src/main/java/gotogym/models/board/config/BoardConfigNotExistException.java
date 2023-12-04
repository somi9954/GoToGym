package gotogym.models.board.config;

import gotogym.commons.exceptions.CommonException;
import org.springframework.http.HttpStatus;

public class BoardConfigNotExistException extends CommonException {

    public BoardConfigNotExistException() {
        super(bundleValidation.getString("Validation.board.notExists"), HttpStatus.BAD_REQUEST);
    }
}
