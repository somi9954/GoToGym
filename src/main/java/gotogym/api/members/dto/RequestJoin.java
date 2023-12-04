package gotogym.api.members.dto;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record RequestJoin(
        @NotBlank @Email
        String email,

        @NotBlank
        @Size(min=8)
        String password,

        @NotBlank
        String confirmPassword,

        @NotBlank
        String name,

        @NotBlank
        String mobile,

        @AssertTrue
        boolean agree
) {}
