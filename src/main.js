// ব্লাডগ্রুপ অনুযায়ী ডোনার সার্চ
bloodDoners.map((item) => {
  if (item.bloodGroup === "O") {
    console.log(`
      Name: ${item.name}
      Age: ${item.age}
      Address: ${item.address}
      Phone Number: ${item.cellNumber}
      Maritial Status: ${item.isMarried ? "Married" : "Unmarried"}
      Blood Group : ${item.bloodGroup}
      Last Blood Donate Date: ${item.lastDonateBloodDate}
      `);
  }
});

bloodDoners.map((item) => {
  if (item.lastDonateBloodDate >= 120) {
    console.log(`You are Perfect ${item.name}`);
  } else {
    console.log(
      `Not Ok ${item.name}.${item.gender === "male" ? "Mr" : "Mrs"} ${
        item.name
      } Wait ${120 - item.lastDonateBloodDate} days for donating blood`
    );
  }
});

const currentDate = 150;

const eligibleDonors = bloodDoners.filter((donor) => {
  const monthsSinceLastDonate = (currentDate - donor.lastDonateBloodDate) / 30;

  return monthsSinceLastDonate >= 4 && monthsSinceLastDonate <= 4.33;
});

eligibleDonors.forEach((donor) => {
  console.log(`
        Name: ${donor.name}
        Age: ${donor.age}
        Blood Group: ${donor.bloodGroup}
        Address: ${donor.address}
        Phone Number: ${donor.cellNumber}
        Marital Status: ${donor.isMarried ? "Married" : "Unmarried"}
        Last Blood Donate Date: ${donor.lastDonateBloodDate}
      `);

  const daysUntilNextDonate = 120 - donor.lastDonateBloodDate;
  console.log(
    `Eligible to donate blood again within the next ${daysUntilNextDonate} days\n`
  );
});
