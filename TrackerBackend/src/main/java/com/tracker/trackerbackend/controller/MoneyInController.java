package com.tracker.trackerbackend.controller;

import com.tracker.trackerbackend.model.MoneyIn;
import com.tracker.trackerbackend.service.MoneyInService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/Loans")
public class MoneyInController
{   @Autowired
    private MoneyInService moneyInService;

    @GetMapping("/allMoneyIn")
    public List<MoneyIn> getMoneyIn()
    {
        return moneyInService.getall();

    }

    @PutMapping("/AddMoneyIn")
    public MoneyIn addMoneyIn(@RequestBody MoneyIn moneyIn)

    {
        return moneyInService.addMonetyIn(moneyIn);
    }

}
