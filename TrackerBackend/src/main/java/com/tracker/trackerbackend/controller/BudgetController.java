package com.tracker.trackerbackend.controller;

import com.tracker.trackerbackend.model.Budget;
import com.tracker.trackerbackend.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/budget")
public class BudgetController
{
    @Autowired
    private BudgetService service;
    @RequestMapping("/all")
    public List<Budget> getBudgets()
    {
        return service.getAllBudget();
    }
    @PostMapping("/addBudget")
    public Budget addBudget(@RequestBody Budget budget)
    {
        return service.addAllBudget(budget);
    }

}
