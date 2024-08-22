package com.tracker.trackerbackend.model;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@AllArgsConstructor
@NoArgsConstructor
public class MoneyOut
{
    @Id
    private int id;
    private double amount;
    private String Name;
    private Data date;

}
