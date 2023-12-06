package gotogym.models.board;

import gotogym.commons.exceptions.CommonException;
import org.springframework.http.HttpStatus;

public class GuestPasswordIncorrectException extends CommonException {

    public GuestPasswordIncorrectException() {
        super(bundleValidation.getString("GuestPw.incorrect"), HttpStatus.BAD_REQUEST);
    }
}
