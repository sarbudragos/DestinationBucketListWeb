CREATE TABLE destinations
(
    id            INT AUTO_INCREMENT NOT NULL,
    title         VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    stay_date_id  INT NULL,
    location_id   INT NULL,
    image         VARCHAR(255) NULL,
    is_public     BIT(1) NULL,
    user_id       INT NULL,
    CONSTRAINT pk_destinations PRIMARY KEY (id)
);

CREATE TABLE geolocations
(
    id      INT AUTO_INCREMENT NOT NULL,
    country VARCHAR(255) NULL,
    zone    VARCHAR(255) NULL,
    CONSTRAINT pk_geolocations PRIMARY KEY (id)
);

CREATE TABLE stay_dates
(
    id         INT AUTO_INCREMENT NOT NULL,
    start_date datetime NULL,
    end_date   datetime NULL,
    CONSTRAINT pk_stay_dates PRIMARY KEY (id)
);

CREATE TABLE users
(
    id        INT AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(255) NULL,
    e_mail    VARCHAR(255) NULL,
    password  VARCHAR(255) NULL,
    user_type VARCHAR(255) NULL,
    CONSTRAINT pk_users PRIMARY KEY (id)
);

ALTER TABLE destinations
    ADD CONSTRAINT FK_DESTINATIONS_ON_LOCATION FOREIGN KEY (location_id) REFERENCES geolocations (id);

ALTER TABLE destinations
    ADD CONSTRAINT FK_DESTINATIONS_ON_STAY_DATE FOREIGN KEY (stay_date_id) REFERENCES stay_dates (id);

ALTER TABLE destinations
    ADD CONSTRAINT FK_DESTINATIONS_ON_USER FOREIGN KEY (user_id) REFERENCES users (id);