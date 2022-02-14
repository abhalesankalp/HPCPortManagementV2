#A. Access live application
  This application is already deployed on azure and you can easily access it on this URL

  https://hpcportmanagementv2.azurewebsites.net/

#B. To run it locally
   1. To run this application on your local machine you must clone the following repository.

      https://github.com/abhalesankalp/HPCPortManagementV2

 2. In this repository there are two folders which are as follow

    A. **PortsManagement** => This folder contains API implementation in .net core. <br/>
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
    9. then run command `dotnet run` . Your application will be up and you can access APIs on the above URL.
 
**4. Steps to run UI Application**

      
 
 
