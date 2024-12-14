# Express.js Server Unresponsiveness with Asynchronous Operations

This repository demonstrates a common issue in Express.js applications where asynchronous operations within request handlers can lead to perceived server unresponsiveness.  The example shows a simple Express server that simulates a 2-second delay before sending a response. This delay can cause issues, especially under load.

## Bug

The `bug.js` file contains an Express.js server that handles GET requests to the root path.  A `setTimeout` function simulates an asynchronous operation, causing a 2-second delay before sending the response. During this delay, the server appears unresponsive to the client.

## Solution

The `bugSolution.js` file demonstrates a way to handle asynchronous operations effectively in Express.js, making sure responses are sent promptly, and issues with perceived unresponsiveness are minimized.