export interface Contact {
  id?: string;
  name: string;
  email: string;
  birthday: Date;
  phones?: string[];
}

// 1. connect service to contacts component
// 2. build table with the data received from the service
// 3. add messages in case no data (empty contacts array) and no phones
