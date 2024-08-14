package com.tracker.trackerbackend.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Budget
{
    @Id
    @GeneratedValue
    private int id;
    private String month;
    private Date date;
    private Double budget;
}
