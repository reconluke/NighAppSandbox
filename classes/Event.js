import { create } from "domain";



function Event(ownerId, latitude, longitude, createDatetime, description, category, status) {
    this.ownerId = ownerId;
    this.latitude = latitude;
    this.longitude = longitude;
    if(createDatetime && createDatetime instanceof Datetime){
        this.createDatetime = createDatetime;
    } else if (!createDatetime){
        this.createDatetime = new Datetime;
    } else {
        return {error: 'createDatetime is invalid.'};
    }
    if(this.description.length < 140 && this.description.length > 0){
        this.description = description;
    } else if (this.description.length > 0){
        this.description = '';
    }
    this.category = category;
    this.status = status;
  }