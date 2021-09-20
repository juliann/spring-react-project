package com.nadarzy.springreactproject.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.hateoas.RepresentationModel;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.UUID;

/** Created by Julian Nadarzy on 18/09/2021 */
@Entity
@Getter
@Setter
@NoArgsConstructor
public class Book extends RepresentationModel<Book> {

  @Id @GeneratedValue private UUID id;

  private String title;
  private String author;
  private String coverPhotoURL;
  private Long isbnNumber;
  private Double price;
  private String language;

  @JsonCreator
  public Book(
      @JsonProperty("id") UUID id,
      @JsonProperty("title") String title,
      @JsonProperty("author") String author,
      @JsonProperty("coverPhotoURL") String coverPhotoURL,
      @JsonProperty("isbnNumber") Long isbnNumber,
      @JsonProperty("price") Double price,
      @JsonProperty("language") String language) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.coverPhotoURL = coverPhotoURL;
    this.isbnNumber = isbnNumber;
    this.price = price;
    this.language = language;
  }
}
