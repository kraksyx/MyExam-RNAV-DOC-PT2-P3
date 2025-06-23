const questions = [
  {
    "question": "The colour for the present track line in the expanded mode is:",
    "options": [
      "white",
      "green",
      "magenta",
      "cyan"
    ],
    "correct": 0
  },
  {
    "question": "The range arcs in the expanded and map modes are recommended to be coloured:",
    "options": [
      "White",
      "Green",
      "Magenta",
      "Cyan"
    ],
    "correct": 0
  },
  {
    "question": "The recommended colour for an off route waypoint is:",
    "options": [
      "white",
      "green",
      "magenta",
      "Cyan"
    ],
    "correct": 3
  },
  {
    "question": "The recommended colour for the aircraft symbol is:",
    "options": [
      "White",
      "Green",
      "Magenta",
      "Cyan"
    ],
    "correct": 0
  },
  {
    "question": "In the NAV and EXP NAV modes one dot on the EHSI represents:",
    "options": [
      "2 nm",
      "2\u00b0",
      "5 nm",
      "5\u00b0"
    ],
    "correct": 0
  },
  {
    "question": "Which EHSI modes cannot show AWR information:",
    "options": [
      "FULL VOR/ILS/NAV and MAP",
      "PLAN, CTR MAP and EXP VOR/ILS/NAV",
      "CTR MAP and PLAN",
      "PLAN and FULL VOR/ILS/NAV"
    ],
    "correct": 3
  },
  {
    "question": "The track line on an EFIS display indicates:",
    "options": [
      "that a manual track has been selected",
      "that a manual heading has been selected",
      "the actual aircraft track over the ground, which will coincide with the aircraft heading when there is zero drift",
      "the aircraft actual track which will coincide with the planned track when there is zero drift"
    ],
    "correct": 2
  },
  {
    "question": "If range indications are screen/hidden, this means:",
    "options": [
      "The transponder is out of service",
      "The aeroplane is out of range",
      "The aeroplane's equipment is in search mode",
      "The DME unit is in memory mode"
    ],
    "correct": 1
  },
  {
    "question": "When in tracking mode, the airborne interrogator operates at:",
    "options": [
      "A PRR variable between 24 and 30 pulses per second",
      "A PRR fixed at a rate selected from the range 24 to 30 PPS",
      "A PRR of 150 PPS",
      "A PRR of 2700 PPS"
    ],
    "correct": 0
  },
  {
    "question": "What use if any does TACAN provide to civilian users:",
    "options": [
      "Bearing information only",
      "Bearing and range information",
      "Range information only (DME)",
      "It is of no use to civilian pilots"
    ],
    "correct": 2
  },
  {
    "question": "Colour code rules for Electronic Flight Instrument Systems (EFIS), turbulence is coloured:",
    "options": [
      "magenta",
      "flashing red",
      "white or magenta",
      "high colour gradient"
    ],
    "correct": 2
  },
  {
    "question": "The colour red is used on an EFIS screen for:",
    "options": [
      "(i) Warnings",
      "(ii) Flight envelope and system limits",
      "(i) and (ii) Correct",
      "Scales and associated figures"
    ],
    "correct": 2
  },
  {
    "question": "Colour code rules for Electronic Flight Instrument Systems (EFIS), armed modes are coloured:",
    "options": [
      "white",
      "green",
      "magenta",
      "amber/yellow"
    ],
    "correct": 0
  },
  {
    "question": "The recommended colour for a downpath waypoint is:",
    "options": [
      "white",
      "green",
      "magenta",
      "cyan"
    ],
    "correct": 0
  },
  {
    "question": "The navigation database in the FMC:",
    "options": [
      "is read only for the pilots",
      "can be modified by the pilots to meet route requirements",
      "can be amended by the pilots to update navigational data",
      "is inaccessible to the flight crew"
    ],
    "correct": 0
  },
  {
    "question": "The database of an FMS (Flight Management System) is organised in such a way that the pilot can:",
    "options": [
      "modify the database every 28 days",
      "only read the database",
      "insert navigation data between two updates",
      "read and write at any time in database"
    ],
    "correct": 2
  },
  {
    "question": "Which of the following can be input manually to the FMC using a maximum of 5 alphanumerics?",
    "options": [
      "Waypoints, latitude and longitude, SIDs and STARs",
      "ICAO aerodrome designators, navigation facilities, SIDs and STARs",
      "Waypoints, airways designators, latitude and longitude",
      "Navigation facilities, reporting points, airways designators"
    ],
    "correct": 3
  },
  {
    "question": "When is the IRS position updated:",
    "options": [
      "at VOR beacons on route by the pilots",
      "continuously by the FMC",
      "at significant waypoints only",
      "on the ground only"
    ],
    "correct": 3
  },
  {
    "question": "When is the FMS position likely to be least accurate?",
    "options": [
      "TOD",
      "TOC",
      "Just after take-off",
      "On final approach"
    ],
    "correct": 0
  },
  {
    "question": "With regard to FMS, what are the possible modes of operation for dual FMC installations?",
    "options": [
      "Dual",
      "Dual and single",
      "Dual, independent, and single",
      "None of the above"
    ],
    "correct": 2
  },
  {
    "question": "Why is gate number requested by the FMC?",
    "options": [
      "So that the FMS can convert the gate position into a WGS 84 co-ordinate for the inertial navigation system",
      "To calculate take-off speed",
      "To identify the airport terminal position",
      "To program the departure SID more accurately"
    ],
    "correct": 0
  },
  {
    "question": "Positions on a Flight Management Computer are updated with information from:",
    "options": [
      "DME/VOR",
      "DME/DME or DME/VOR",
      "DME/DME",
      "VOR/ADF"
    ],
    "correct": 1
  },
  {
    "question": "The FMC position is:",
    "options": [
      "the average of the IRS positions",
      "the average of the IRS and radio navigation positions",
      "computer generated from the IRS and radio navigation positions",
      "computer generated from the radio navigation positions"
    ],
    "correct": 2
  },
  {
    "question": "In which of the following cases would ETOs and ETA at destination calculated by the Flight Management Computer (FMC) be correct?",
    "options": [
      "When the ETOs and ETA are based on the forecast winds calculated from the actual take-off time",
      "When the FMC computes each ETO and ETA using the correct GS",
      "When the FMC positions and GS are accurate",
      "When the actual winds match the forecast winds, and the actual cruising Mach number is equal to the FMC calculated Mach number"
    ],
    "correct": 3
  },
  {
    "question": "The ETA generated by the FMS will be most accurate:",
    "options": [
      "when the forecast W/V equals the actual W/V and the FMS calculated Mach No. equals the actual Mach No.",
      "if the ground speed and position are accurate",
      "if the forecast W/V at take-off is entered",
      "if the ground speed is correct and the take-off time has been entered"
    ],
    "correct": 1
  },
  {
    "question": "The databases on a FMC:",
    "options": [
      "can be read or written on to at any time",
      "can be modified by the pilot",
      "are read only",
      "are updated once every 28 weeks"
    ],
    "correct": 2
  },
  {
    "question": "The FMS database can be:",
    "options": [
      "altered by the pilots between the 28 day update",
      "read and altered by the pilots",
      "only read by the pilots",
      "altered by the pilots every 28 days"
    ],
    "correct": 2
  },
  {
    "question": "What is Back Up FMS navigation mode?",
    "options": [
      "When only one FMS is operational",
      "When one FMS is a Master and the other is a Slave",
      "When one FMS operates independently from the other",
      "When the FMC is suffering from some failure but there is still limited FMS function"
    ],
    "correct": 3
  },
  {
    "question": "Why is an IRS known as a self-contained system?",
    "options": [
      "\"Because it derives navigational data from relative movement via in-built sensors\"",
      "It does not use any electrical power",
      "It gets data from external systems",
      "It is integrated with GPS"
    ],
    "correct": 0
  },
  {
    "question": "The FMS is composed of:",
    "options": [
      "the command display unit and the flight management computer",
      "the automatic flight control system and the power management controls system",
      "the flight management computer only",
      "the EFIS and EICAS displays"
    ],
    "correct": 0
  },
  {
    "question": "The inputs the pilot will make to the FMC during the pre-flight initialisation will include:",
    "options": [
      "ETD, aircraft position, and planned route",
      "Planned route, aircraft position, and departure runway",
      "Navigation database, aircraft position and departure aerodrome",
      "Departure runway, planned route and ETD"
    ],
    "correct": 1
  },
  {
    "question": "When midway between two waypoints how can the pilot best check the progress of the aircraft:",
    "options": [
      "by using the ATD at the previous waypoint",
      "by using the computed ETA for the next waypoint",
      "by using the ATA at the previous waypoint",
      "by using the ETA at the destination"
    ],
    "correct": 1
  },
  {
    "question": "An all in view satellite navigation receiver is one which:",
    "options": [
      "monitors all 24 satellites",
      "tracks selected satellites",
      "selects and tracks all (in view) satellites and selects the best four",
      "tracks the closest satellites"
    ],
    "correct": 2
  },
  {
    "question": "In NAVSTAR/GPS the PRN codes are used to:",
    "options": [
      "differentiate between satellites",
      "pass satellite ephemeris information",
      "pass satellite time and ephemeris information",
      "pass satellite time, ephemeris and other information"
    ],
    "correct": 0
  }
];
