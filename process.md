# Assignment 6 Plan

Mock Up
![Mock Up](mock_up.png)

Component Hierarchy

![Component Hierarchy](labeled-02.png)

- Everything 
    - SortByBox
    - ItemTable
        - Subheading
        - ItemRow
        - CheckBox

Everything will hold all of the other components. ItemTable will hold Subheading, ItemRow, and CheckBox. SortByBox will determine how the ItemRows are organized. CheckBox and SortByBox will take in user input. ItemRow, CheckBox, and SortByBox will change apperance (or order) in response to user input. 

State
I will need to keep state of the user input: the radio buttons and check boxes. The radio buttons state will be stored in SortByBox, and accessed by Everything to make sure the data is filtered correctly. The check boxes state will be stored in Check Box and change apperance based on user input. 