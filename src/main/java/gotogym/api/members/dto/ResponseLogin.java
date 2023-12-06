package gotogym.api.members.dto;

import lombok.Builder;

@Builder
public record ResponseLogin(
    String accessToken
) {}
