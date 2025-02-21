// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Ticketing {
    struct Event {
        string name;
        uint256 price;
        uint256 ticketsAvailable;
    }

    mapping(uint256 => Event) public events;
    uint256 public eventCount;

    function createEvent(string memory _name, uint256 _price, uint256 _ticketsAvailable) public {
        events[eventCount] = Event(_name, _price, _ticketsAvailable);
        eventCount++;
    }

    function buyTicket(uint256 eventId) public payable {
        require(eventId < eventCount, "Event does not exist");
        require(msg.value == events[eventId].price, "Incorrect amount sent");
        require(events[eventId].ticketsAvailable > 0, "No tickets left");

        events[eventId].ticketsAvailable--;
    }
}
