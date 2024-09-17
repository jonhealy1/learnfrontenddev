pragma solidity ^0.4.17;
// linter warnings (red underline) about pragma version can igonored!

// contract code will go here
contract Inbox {
    
    string public message; 

    function Inbox(string initialMessage) public {
        /**
         * @notice Initializes the Inbox contract with an initial message.
         * @param initialMessage The initial message to be stored.
         */
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        /**
         * @notice Updates the message stored in the Inbox contract.
         * @param newMessage The new message to be stored.
         */
        message = newMessage;
    }
}
