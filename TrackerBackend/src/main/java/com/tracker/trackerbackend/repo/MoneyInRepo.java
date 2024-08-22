package com.tracker.trackerbackend.repo;

import com.tracker.trackerbackend.model.MoneyIn;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

public interface MoneyInRepo extends MongoRepository<MoneyIn,Integer>
{

}
