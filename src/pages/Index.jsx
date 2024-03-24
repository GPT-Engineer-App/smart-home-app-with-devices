import React, { useState } from "react";
import { Box, Heading, VStack, Input, Button, Text, IconButton, HStack, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [devices, setDevices] = useState([]);
  const [newDevice, setNewDevice] = useState("");
  const toast = useToast();

  const handleAddDevice = () => {
    if (newDevice.trim() !== "") {
      setDevices([...devices, newDevice]);
      setNewDevice("");
      toast({
        title: "Device added",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleRemoveDevice = (index) => {
    const updatedDevices = devices.filter((_, i) => i !== index);
    setDevices(updatedDevices);
    toast({
      title: "Device removed",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={8}>
        Smart Home App
      </Heading>
      <VStack spacing={4} align="stretch">
        <HStack>
          <Input placeholder="Enter device name" value={newDevice} onChange={(e) => setNewDevice(e.target.value)} />
          <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleAddDevice}>
            Add Device
          </Button>
        </HStack>
        {devices.length === 0 ? (
          <Text>No devices added yet.</Text>
        ) : (
          devices.map((device, index) => (
            <HStack key={index} justify="space-between">
              <Text>{device}</Text>
              <IconButton icon={<FaTrash />} colorScheme="red" size="sm" onClick={() => handleRemoveDevice(index)} />
            </HStack>
          ))
        )}
      </VStack>
    </Box>
  );
};

export default Index;
