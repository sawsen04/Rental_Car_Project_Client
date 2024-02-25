import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { adminUrl } from "../../utils/url";
import axios from "axios";
import { Button, Modal } from "flowbite-react";
import "photoswipe/style.css";
import "./style.css";
function OrderItem({
  _id,
  drivingLicense,
  pickUpDay,
  returnDay,
  ammount,
  carId,
  userId,
  isPaid,
  isFinished,
}) {
  // console.log(isFinished);
  const [openModal, setOpenModal] = useState(false);
  const photos = drivingLicense.map((elt) => {
    return {
      largeURL: elt,
      thumbnailURL: elt,
      width: 619,
      height: 412,
    };
  });
  let galleryID = "my-test-gallery";
  let token = localStorage.getItem("token");
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
      maxWidthToAnimate: 800,
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [galleryID]);
  const [loading, setLoading] = useState(false);
  const handleApproveOrder = () => {
    setLoading(true);
    axios
      .put(
        `${adminUrl}/approveOrder/${_id}/${carId._id}`,
        {},
        {
          headers: { token },
        }
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const handleFinishRent = () => {
    setLoading(true);
    axios
      .put(
        `${adminUrl}/finishRent/${_id}/${carId._id}`,
        {},
        {
          headers: { token },
        }
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="p-3">
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Car Details</Modal.Header>
        <Modal.Body>
          <div className="overflow-x-auto">
            <Table hoverable>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    CarId
                  </Table.Cell>
                  <Table.Cell> {carId._id}</Table.Cell>

                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Brand
                  </Table.Cell>
                  <Table.Cell> {carId.brand}</Table.Cell>

                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Model
                  </Table.Cell>
                  <Table.Cell>{carId.model}</Table.Cell>

                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Price per day
                  </Table.Cell>
                  <Table.Cell>{carId.pricePerDay}</Table.Cell>

                  <Table.Cell></Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </Modal.Body>
      </Modal>
      <div>
        <Table>
          <Table.Head style={{ fontSize: "0.7rem", fontWeight: "bold" }}>
            <Table.HeadCell className="order-order">Order Id</Table.HeadCell>

            <Table.HeadCell className="order-order" style={{ width: "130px" }}>
              Pickup Day
            </Table.HeadCell>
            <Table.HeadCell className="order-order">DropOff Day</Table.HeadCell>
            <Table.HeadCell className="order-order">Order Total</Table.HeadCell>
            <Table.HeadCell className="order-order">User Name</Table.HeadCell>
            <Table.HeadCell className="order-order">
              driving License
            </Table.HeadCell>
            <Table.HeadCell className="order-order">Payment</Table.HeadCell>
            <Table.HeadCell className="order-order">Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body
            style={{ fontSize: "0.7rem", fontWeight: "bold" }}
            className="divide-y"
          >
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell
                className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                style={{ cursor: "pointer" }}
                onClick={() => setOpenModal(true)}
              >
                {_id.substr(0)}
              </Table.Cell>

              <Table.Cell>{pickUpDay}</Table.Cell>
              <Table.Cell>{returnDay}</Table.Cell>
              <Table.Cell>{ammount}</Table.Cell>
              <Table.Cell>{userId.fullName}</Table.Cell>
              <Table.Cell>
                {/* <div>
                  <img src={drivingLicense[0]} alt="" />
                  <img src={drivingLicense[1]} alt="" />
                </div> */}
                <div className="pswp-gallery flex gap-2" id={galleryID}>
                  {photos?.map((image, index) => (
                    <a
                      href={image.largeURL}
                      data-pswp-width={image.width}
                      data-pswp-height={image.height}
                      key={galleryID + "-" + index}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={image.thumbnailURL} alt="" width={80} />
                    </a>
                  ))}
                </div>
              </Table.Cell>
              <Table.Cell>
                {isPaid ? "order is paid" : "order is unpaid"}
              </Table.Cell>
              <Table.Cell>
                {isFinished ? (
                  <span>Order closed</span>
                ) : (
                  <Button.Group>
                    <Button
                      className=""
                      onClick={() => {
                        handleApproveOrder();
                      }}
                      loading={loading}
                      color="gray"
                      size="sm"
                    >
                      Approve Order
                    </Button>
                    <Button
                      className=""
                      onClick={() => {
                        handleFinishRent();
                      }}
                      loading={loading}
                      color="gray"
                      size="sm"
                    >
                      Finish Rent
                    </Button>
                  </Button.Group>
                )}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default OrderItem;
