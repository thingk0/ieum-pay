package com.ieum.common.response;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class FundingInfoDTO {

    String img;
    Long fundingId;
    int fundingAmount;
    boolean ongoing;
}
