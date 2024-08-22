package com.tracker.trackerbackend.service;

import com.tracker.trackerbackend.model.MoneyIn;
import com.tracker.trackerbackend.repo.MoneyInRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MoneyInService
{
    @Autowired
    private MoneyInRepo moneyInRepo;
    public List<MoneyIn> getall()
    {
        return moneyInRepo.findAll();
    }

    public MoneyIn addMonetyIn(MoneyIn moneyIn)
    {
        return moneyInRepo.save(moneyIn);
    }

}
