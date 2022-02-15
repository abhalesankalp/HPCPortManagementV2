#A. Access live application
  This application is already deployed on azure and you can easily access it.
         
          to access app, please visit
          
          https://hpcportmanagementv2.azurewebsites.net/
  
           to access APIs please visit
  
           https://portsmanagementapi.azurewebsites.net/swagger/index.html

#B. To run it locally
   1. To run this application on your local machine you must clone the following repository.

      https://github.com/abhalesankalp/HPCPortManagementV2

 2. In this repository there are two folders which are as follow

    A. **PortsManagement** => This folder contains API implementation in .net core.
    B. **PortsManagementUI** => This folder contains implementation related to UI

3. **Steps to run the API application** 
    1. There are 2 ways to run API applications
    2. The first one is if you have a visual studio installed on your machine then just open the `.sln` file which will load solution in your Visual Studio.
   3. After that set the` PortManagement` project as the startup project and run the application
   4. This will run your API application, which you can check on this localhost link
      
           `https://localhost:7168/swagger/index.html` 

    5. You can also test APIs on this link. 
    6. Another way to run the API .net core application is through a command prompt
    7. For that you need to install .net core if it's not installed on your machine using the command `dotnet-install` 
    8. Once .net-core is installed, open cmd and change directory to `HPCPortManagementV2\PortsManagement`
    9. then run command `dotnet run`. Your application will be up and you can access APIs on the above URL.
 
4. **Steps to run UI Application**

     1. To run UI application switch to path `HPCPortManagementV2\PortsManagementUI` in cmd.
     2. Make sure you have nodejs installed on your machine
     3. Then run command `npm i` to install packages
     4. once that is done, run command `npm start` to run this application
     5. your application will be up.

5. **What if data is not loading correctly**
    1. If data is not getting loaded correctly on your UI but you can see data after running GET API on this link `https://localhost:7168/swagger/index.html`,  then you have to verify **.env** file of react app. `[HPCPortManagementV2\PortsManagementUI\.env]`.

    2. value of `REACT_APP_SERVER_API_URL` should match with your API URL which is most commonly  `https://localhost:7168/'


#C. Google Map integration
   1. I have integrated google map with app, on which you can see your sheep location based on coordinates provided by you.
 2. At the time of loading this application you will see one error on google map **`This page can't load Google Maps correctly.`**. you have to just click on and ignore this error. it will appear only first time after loading. this is because I am currently using free API version of google maps.
      
 
 
