package com.tracker.trackerbackend.repo;

import com.tracker.trackerbackend.model.MoneyOut;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MoneyOutRepo extends MongoRepository<MoneyOut, Integer>
{
}
