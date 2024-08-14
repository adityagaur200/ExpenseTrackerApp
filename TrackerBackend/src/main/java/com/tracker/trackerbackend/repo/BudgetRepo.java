package com.tracker.trackerbackend.repo;

import com.tracker.trackerbackend.model.Budget;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BudgetRepo extends MongoRepository<Budget,Integer>
{

}
