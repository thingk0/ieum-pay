package com.ieum.common.dto.tmpdto.funding.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
public class FundingDonationResponseDTO {
    private Boolean fundingResult;
}