package com.ieum.common.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class HistoryDTO {
    String type;
    String name;
    int price;
}
