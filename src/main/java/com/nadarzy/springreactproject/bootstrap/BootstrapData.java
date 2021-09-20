package com.nadarzy.springreactproject.bootstrap;

import com.nadarzy.springreactproject.model.Book;
import com.nadarzy.springreactproject.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/** Created by Julian Nadarzy on 18/09/2021 */
@Component
public class BootstrapData implements CommandLineRunner {

  @Autowired private IService<Book> service;

  @Override
  public void run(String... args) throws Exception {
    Book book = new Book();
    book.setTitle("Spring Microservices in Action");
    book.setAuthor("John Carnell");
    book.setCoverPhotoURL(
        "https://images-na.ssl-images-amazon.com/images/I/417zLTa1uqL._SX397_BO1,204,203,200_.jpg");
    book.setIsbnNumber(1617293989L);
    book.setPrice(2776.00);
    book.setLanguage("English");
    service.saveOrUpdate(book);
  }
}
