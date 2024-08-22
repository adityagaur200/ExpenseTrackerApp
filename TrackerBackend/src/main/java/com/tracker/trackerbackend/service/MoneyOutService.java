package com.tracker.trackerbackend.service;

import com.tracker.trackerbackend.model.MoneyOut;
import com.tracker.trackerbackend.repo.MoneyOutRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MoneyOutService
{
    @Autowired
    private MoneyOutRepo repo;

    public List<MoneyOut> getall() {
        return repo.findAll();
    }

    public MoneyOut addMoneyOut(MoneyOut moneyOut) {
        return repo.save(moneyOut);
    }
}

