# Corona
ביקשתי ליצור מאגר של נתונים של מערכת חיסונים 
בשביל לצפות במערכת
דבר ראשון צריך להוריד את הפרויקט למחשב המקומי
דבר שני צריכים להתקין Npm i 
לאחר שהרצנו את הפרויקט
נעבור פונקציה פונקציה ונסביר מה כל מטרת פונקציה
עכשיו נראה את צילומי המסך של צד הלקוח וכן את הפונקציות 
-הוספת חבר חדש כולל כל פרטיו:
זאת הפונקציה:![image](https://github.com/SARAHLER/Corona/assets/74296156/739fa9c9-e8fe-496c-834a-d045e1313b5d)



בפוסטמן
post
בurl  אנחנו רושמים: http://localhost:5000/members
וב BODY:{
![image](https://github.com/SARAHLER/Corona/assets/74296156/35add879-747e-426c-bbd0-5912b9865ba1)

זה צילום של השמירה שהצליחה במונוגו:
![image](https://github.com/SARAHLER/Corona/assets/74296156/8b88af9a-7cf6-430d-9ee2-21035bbc52e9)

 
- שליפת כל החברים הקיימים במאגר
 בפוסטמן

בurl-  http://localhost:5000/members
![image](https://github.com/SARAHLER/Corona/assets/74296156/255265bd-74c7-4a5b-9d76-052f508ddbb4)

ובמסד נתונים נראה שיש לנו את אותם חברים:
![image](https://github.com/SARAHLER/Corona/assets/74296156/40c2a83b-11d0-4718-9bd7-9f5ac879a9ad)

עכשיו נרצה לשלוף חבר לפי תעודת זהות
זה הפונקציה :
![image](https://github.com/SARAHLER/Corona/assets/74296156/9f251582-96a3-4fba-ab58-e3afdde696b4)

בפוסטמן: http://localhost:5000/members/3145566456

![image](https://github.com/SARAHLER/Corona/assets/74296156/5487a1b5-8200-4140-8c0b-554065d7f633)

-עכשיו אני רוצה ליצור פרטים בנושא הקורנה
זאת הפונקציה
![image](https://github.com/SARAHLER/Corona/assets/74296156/be6b3f56-229b-471f-acd8-90050eff7aad)
![image](https://github.com/SARAHLER/Corona/assets/74296156/0e300573-a44f-43fd-98a3-ef149bfe21eb)

 בפוסטמן:
 בurl: http://localhost:5000/members/3145566456/corona +תעודת זהות
 בפוסטמן  ב body 

![image](https://github.com/SARAHLER/Corona/assets/74296156/62656c9a-556c-49c9-a34e-db021f17fab3)

וקיבלנו 
![image](https://github.com/SARAHLER/Corona/assets/74296156/673642d0-b8f9-4554-9f41-da7a86b541c2)

 עכשיו נעבור קצת על הבדיקות 
 ![image](https://github.com/SARAHLER/Corona/assets/74296156/a791f197-5c9c-407e-8df5-148fd6c6e6da)

נבדוק אם אפשר להוסיף מעל 4

יש לאותו חבר 4 חיסונים: אני רואים שזה אותו חבר עי הid 
![image](https://github.com/SARAHLER/Corona/assets/74296156/5ce625ea-2bce-4024-9429-dfc9035d2b1d)


וכאן אנו רואים  שבאמת יש לו 4 חיסונים במסד נתונים
![image](https://github.com/SARAHLER/Corona/assets/74296156/ed985eb0-63a7-438c-a535-364972fef10f)

עכשיו ננסה להוסיף לו חיסון נוסף:
![image](https://github.com/SARAHLER/Corona/assets/74296156/65bc7420-52e0-4ffb-9896-79409f901d19)

וקיבלנו:
![image](https://github.com/SARAHLER/Corona/assets/74296156/629d6ec1-171a-469a-9cc7-6e7f2e37d84e)


בדיקה שנניח אפשר לקבל רק פעם אחת תוצאה חיובית:
בפוסטמן:
![image](https://github.com/SARAHLER/Corona/assets/74296156/f54a2fe0-4d4c-4172-a5e9-33077c815379)

וקיבלנו הערה:
![image](https://github.com/SARAHLER/Corona/assets/74296156/d39eb770-72da-420e-980f-5f6258cf059c)



