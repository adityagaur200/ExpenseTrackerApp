package com.tracker.trackerbackend.controller;

import com.tracker.trackerbackend.model.MoneyOut;
import com.tracker.trackerbackend.service.MoneyOutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Loans")
public class MoneyOutController
{
    @Autowired
    private MoneyOutService moneyOutService;

    @GetMapping("/allMoneyOut")
    public List<MoneyOut> getAllMoneyOut(){
        return moneyOutService.getall();
    }

    @PutMapping("/AddMoneyOut")
    public MoneyOut addMoneyOut(@RequestBody MoneyOut moneyOut)
    {
        return moneyOutService.addMoneyOut(moneyOut);
    }

}
