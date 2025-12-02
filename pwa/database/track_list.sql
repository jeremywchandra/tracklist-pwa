CREATE TABLE tracks (
    TrackID INTEGER PRIMARY KEY,
    Name TEXT NOT NULL,
    length TEXT NOT NULL,
    corners INTEGER NOT NULL,
    country TEXT NOT NULL,
    founded TEXT NOT NULL,
    map TEXT NOT NULL
);

INSERT INTO tracks (TrackID, Name, length, corners, country, founded, map)
VALUES
(1, 'Silverstone','5.891', 18, 'United Kingdom', '1943', 'static/images/trackmaps/silverstone.png'),
(2, 'Monaco', '3.337', 20, 'Monaco', '1923', 'static/images/trackmaps/monaco.png'),
(3, 'Zandvoort', '4.259', 14, 'Netherlands', '1948', 'static/images/trackmaps/zandvoort.png'),
(4, 'Autodromo Nazionale Monza', '5.793', 12, 'Italy', '1922', 'static/images/trackmaps/monza.png'),
(5, 'Sochi Autodrome', '5.848', 20, 'Russia', '2014', 'static/images/trackmaps/sochi.png'),
(6, 'Imola', '4.909', 19, 'Emilia Romagna', '1950', 'static/images/trackmaps/imola.png'),
(7, 'Spa Francorchamps', '7.004', 19, 'Belgium', '1922', 'static/images/trackmaps/spa.png'),
(8, 'Hungaroring', '4.381', 14, 'Hungary', '1968', 'static/images/trackmaps/hungaroring.png'),
(9, 'Circuit de Barcelona Catalunya', '4.657', 14, 'Spain', '1970', 'static/images/trackmaps/barcelona.png'),
(10, 'Red Bull Ring', '4.318', 10, 'Austria', '1963', 'static/images/trackmaps/redbullring.png');

SELECT * FROM tracks;