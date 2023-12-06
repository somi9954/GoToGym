package gotogym.commons.exceptions;

import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.Map;
import java.util.ResourceBundle;

public class CommonException extends RuntimeException {
    protected static ResourceBundle bundleValidation;
    protected static ResourceBundle bundleError;

    private HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
    private Map<String, List<String>> messages;

    public CommonException(Map<String, List<String>> messages, HttpStatus status) {
        super();
        this.status = status;
        this.messages = messages;
    }

    static {
        bundleValidation = ResourceBundle.getBundle("messages.validations");
        bundleError = ResourceBundle.getBundle("messages.errors");
    }

    public CommonException(String message, HttpStatus status) {
        super(message);
        this.status = status;
    }

    public HttpStatus getStatus() {
        return status;
    }
    public Map<String, List<String>> getMessages() {
        return messages;
    }
}
