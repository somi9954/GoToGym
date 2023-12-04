package gotogym.models.board;

import gotogym.api.board.BoardForm;
import gotogym.commons.validators.LengthValidator;
import gotogym.commons.validators.RequiredValidator;
import gotogym.commons.validators.Validator;
import gotogym.configs.jwt.CustomJwtFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BoardValidator implements Validator<BoardForm>, RequiredValidator, LengthValidator {

    @Autowired
    private CustomJwtFilter customJwtFilter;

    @Override
    public void check(BoardForm boardForm) {
        requiredCheck(boardForm.getBId(), new BoardValidationException("BadRequest"));
        requiredCheck(boardForm.getGid(), new BoardValidationException("BadRequest"));
        requiredCheck(boardForm.getWriter(), new BoardValidationException("NotBlank.boardForm.writer"));
        requiredCheck(boardForm.getSubject(), new BoardValidationException("NotBlank.boardForm.subject"));
        requiredCheck(boardForm.getContent(), new BoardValidationException("NotBlank.boardForm.content"));

        // 비회원 - 비회원 비밀번호 체크
        if (!customJwtFilter.isUserLoggedIn()) {
            requiredCheck(boardForm.getGuestPw(), new BoardValidationException("NotBlank.boardForm.guestPw"));

            // 비회원 비밀번호 자리수는 6자리 이상
            lengthCheck(boardForm.getGuestPw(), 6, new BoardValidationException("Size.boardForm.guestPw"));
        }
    }
}
