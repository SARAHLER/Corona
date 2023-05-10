# Corona
ביקשתי ליצור מאגר של נתונים של מערכת חיסונים 
בשביל לצפות במערכת
דבר ראשון צריך להוריד את הפרויקט למחשב המקומי
דבר שני צריכים להתקין Npm i 
לאחר שהרצנו את הפרויקט
נעבור פונקציה פונקציה ונסביר מה כל מטרת פונקציה
עכשיו נראה את צילומי המסך של צד הלקוח וכן את הפונקציות 
-הוספת חבר חדש כולל כל פרטיו:
זאת הפונקציה:
exports.addMember = async (req, res) => {
  try {
    const member = new Member(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

בפוסטמן
post
בurl  אנחנו רושמים: http://localhost:5000/members
וב BODY:{
  "firstName": "John",
  "lastName": "Doe",
  "id": "3145566456",
  "address": {
    "city": "Isreal",
    "street": "Rabi",
    "number": "105"
  },
  "dateOfBirth": "1999-11-05",
  "telephone": "02345875",
  "mobilePhone": "06548378282"
}
זה צילום של השמירה שהצליחה במונוגו:
![image](https://github.com/SARAHLER/Corona/assets/74296156/8b88af9a-7cf6-430d-9ee2-21035bbc52e9)

