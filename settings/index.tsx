function settingsComponent(props) {
  return (
    <Page>
      <Section
        title={
          <Text bold align="center">
            App Settings
          </Text>
        }
      >
        <Text>Hi</Text>
      </Section>
    </Page>
  );
}

registerSettingsPage(settingsComponent);
