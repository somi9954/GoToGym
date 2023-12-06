package gotogym.api.commons;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
public class JSONData<T> {
    private boolean success = true;

    @NonNull
    private T data;

    private Object message;
    private HttpStatus status = HttpStatus.OK;
}