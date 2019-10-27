pragma solidity >=0.4.22 <0.6.0;
contract Device{
    address payable Owner;
    address Device;
    address Client;
    address payable Daddy;
    uint8 public start;
    uint8 public end;
    uint8 public status;
    uint256 public howMuch;
    bool public isClosed = false;
    //set administrator
    constructor() public{
           Daddy = msg.sender;
    }
     modifier isOwner(address _Owner, address _sender) {
        require(_Owner == _sender);
        _;
    }
    modifier isDevice(address _device, address _sender) {
        require(_device == _sender);
        _;
    }
    modifier isClient(address _client, address _sender){
        require(_client==_sender);
        _;
    }
    event AfterEvent(string text,address device);
    //set onwer of device
    function setDeviceOwner(address payable _Owner)  public isOwner(Daddy, msg.sender){
        Owner = _Owner;
    }
    //set address of device
    function setDeviceItself(address _device) public isOwner(Daddy, msg.sender){
        Device = _device;
    }
    // only device can open channel
    // TODO add float
    function openChannel(uint8 time, address client) public isDevice(Device, msg.sender){
        start = time;
        Client = client;
        emit AfterEvent('channel opened for ',Client );
        emit AfterEvent('channel opened by ', msg.sender );
    }
    //after ride over create bill for payments
    function createBill(uint8 _time, address client) public isDevice(Device, msg.sender){
        end = _time - start;
        uint8 tmp = _time - start;
        howMuch = tmp * 1000000000000;
        emit AfterEvent('created bill for ', Client );
        emit AfterEvent('created bill from ', msg.sender );
    }
  
    function pay() payable public isClient(Client, msg.sender){
        uint256 amount = msg.value;
        
        if(amount>howMuch){
            Owner.transfer(amount/100*30);
        }else{
            revert('Ti na penek sel doljen bill cosar otdat a huli tut tak malo bliat');
        }
        
    }
    function closeChannel(address _client) payable public isDevice(Device, msg.sender){
        isClosed = true;
        
    }
}

