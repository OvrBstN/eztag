import { useCallback, useState } from "react";
import { useFindMany, useAction } from "@gadgetinc/react";
import { TitleBar } from "@shopify/app-bridge-react";
import {
  Banner,
  Button,
  Form,
  FormLayout,
  Layout,
  Page,
  Spinner,
  Tag,
  TextField,
  Card,
  BlockStack,
  Text,
  InlineStack,
} from "@shopify/polaris";
import { api } from "./api";

const PageLayout = ({ children }) => {
  return <Page title="EZ Tag">{children}</Page>;
};

const ErrorBanner = ({ title, error }) => {
  return (
    <Banner tone="critical" title={title}>
      <pre>
        <code>{error.toString()}</code>
      </pre>
    </Banner>
  );
};

const ShopPage = () => {
  // react hook to manage the keyword input
  const [keyword, setKeyword] = useState("");

  // a useFindMany hook to fetch allowedTag data
  const [{ data, fetching, error }] = useFindMany(api.allowedTag);

  // useAction hook to call the create and delete actions and get the response object
  const [{ data: _createdTag, fetching: createFetch, error: createError }, createTag] = useAction(api.allowedTag.create);
  const [_deleteResponse, deleteTag] = useAction(api.allowedTag.delete);

  // callbacks that are called when the form is submitted or a tag is removed
  const handleSubmit = useCallback(async () => {
    // call the createTag function defined with the useAction hook with the keyword value
    await createTag({
      allowedTag: {
        keyword,
      },
    });
    setKeyword("");
  }, [keyword, createTag]);

  const removeTag = useCallback(
    async (id) => {
      // call the deleteTag function defined with the useAction hook with the id of the tag to delete
      await deleteTag({ id });
    },
    [deleteTag]
  );

  // render the page, using data, fetching, and error from the useFindMany and useAction hooks to display different widgets
  return (
    <PageLayout>
      <Layout>
        <Layout.Section>
          <TitleBar title="EZTag Manager" />
          <Form onSubmit={handleSubmit}>
            <FormLayout>
              {createError && <ErrorBanner title="Error adding keyword" error={createError} />}
              <TextField
                value={keyword}
                onChange={setKeyword}
                label="Tag"
                type="text"
                autoComplete="tag"
                helpText={<span>Add a keyword, if it is in the discription of product the tag will be added.</span>}
                disabled={createFetch}
                connectedRight={
                  <Button variant="primary" submit disabled={createFetch}>
                    Add keyword
                  </Button>
                }
              />
            </FormLayout>
          </Form>
        </Layout.Section>
        <Layout.Section>
          <Card>
            <BlockStack gap="200">
              <Text variant="headingSm" as="h5">
                Existing keywords
              </Text>
              {fetching && <Spinner />}
              {error && <ErrorBanner title="Error reading tags" error={error} />}
              <InlineStack gap="100">
                {data?.map((allowedTag, i) => (
                  <Tag key={i} onRemove={() => removeTag(allowedTag.id)}>
                    {allowedTag.keyword}
                  </Tag>
                ))}
              </InlineStack>
              {data?.length === 0 && <p>No keywords added</p>}
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </PageLayout>
  );
};

export default ShopPage;