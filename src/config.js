const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51IBo46Cok3gyemjeglkwxWdihMohct1XFBTsLDSiBNJz1iMIY564oN4lFYYk4sXJJZoHe67leURRrD8WMqRn1iuZ007i3mIeL9",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-api-prod",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://w0dn7hhi96.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_VTB4zxMGT",
      APP_CLIENT_ID: "1900pm5aine0q7l63mme9ffk06",
      IDENTITY_POOL_ID: "us-east-1:7518af51-7cab-4af5-923d-1da546313e18",
    },
  };
  
  export default config;