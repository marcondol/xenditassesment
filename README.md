##This is Pre assesment for Xendit

To start Application using continer use this command
```docker-compose -f docker-compose.yml up```

To Run Unit Test using container use this command
```docker-compose -f docker-compose-test.yml up --build```

To linting
```npm run lint```


This Apps has 4 End points

1. Enpdoint for list Member of Organization.
  ```get orgs/<org name>/members```
2. Enpdoint for list Comment of Organization.
  ```get orgs/<org name>/comment```
3. Enpdoint for Insert An comment to Organization.
  ```post orgs/<org name>/comment```
4. Enpdoint for delete all comment in Organization.
  ```delete orgs/<org name>/comment```

Organization available is ```xendit```