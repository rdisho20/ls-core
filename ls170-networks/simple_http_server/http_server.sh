#!/bin/bash

function server () {
    while true
    do
        read message
        echo "You said: $message"
    done
}

coproc SERVER_PROCESS { server; }

netcat -lv 2345 <&${SERVER_PROCESS[0]} >&${SERVER_PROCESS[1]}