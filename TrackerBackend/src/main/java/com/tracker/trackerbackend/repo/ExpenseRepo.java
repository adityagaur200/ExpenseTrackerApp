package com.tracker.trackerbackend.repo;

import com.tracker.trackerbackend.model.Expense;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ExpenseRepo extends MongoRepository<Expense,Integer>{
}
