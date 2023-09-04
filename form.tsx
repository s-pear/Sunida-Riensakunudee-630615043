// import { API_URL } from "@/utils/api";
import { Input, Button, Card, Title, Stack } from "@mantine/core";

export default function Form() {
  return (
    <Card withBorder shadow="xs" p="xl" bg="cyan.2">
      <Title order={1} color="blue">
        Donate
      </Title>

      <form>
        <Stack spacing={"xs"}>
          <Input.Wrapper>
            <Input.Label>First Name</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Last Name</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Email</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Donation Amount</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>
          <Button>Submit</Button>
        </Stack>
      </form>
    </Card>
  );
}

[
  {
      "id": "496179b8-f3b3-4d62-ab0e-f39a5d6466f4",
      "firstName": "Bryce",
      "lastName": "Powlowski",
      "email": "Dejuan95@gmail.com",
      "amount": 5731,
      "time": "2023-08-26 09:59:30"
  },
  {
    "id": "496179b8-f3b3-4d62-ab0e-f39a5d6466f4",
    "firstName": "Bryce",
    "lastName": "Powlowski",
    "email": "Dejuan95@gmail.com",
    "amount": 5731,
    "time": "2023-08-26 09:59:30"
},
    {
      "firstName": "Tom",
      "lastName": "Sawyer",
      "email": "test@example.com",
      "amount": "1001" 
    }

]



//donation-server-production.up.railway.app/donation 
//donation-server-production.up.railway.app/donate 