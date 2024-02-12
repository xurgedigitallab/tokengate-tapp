/*
 * Copyright 2024 Nordeck IT + Consulting GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { RoomEvent } from '@matrix-widget-toolkit/api';
import Joi from 'joi';
import { isValidEvent } from './validation';

/**
 * The event type of the upload image.
 */
export const ROOM_EVENT_UPLOADED_IMAGE = 'net.nordeck.uploaded_image';

export type UploadedImageEvent = {
  name: string;
  size: number;
  url: string;
};

const uploadedImageEventSchema = Joi.object<UploadedImageEvent, true>({
  name: Joi.string().required(),
  size: Joi.number().required(),
  url: Joi.string().required(),
}).unknown();

/**
 * Validates that `event` has a valid structure for a
 * {@link UploadedImageRoomEventContent}.
 *
 * @param event - The event to validate.
 * @returns true, if the event is valid.
 */
export function isValidUploadedImage(
  event: RoomEvent<unknown>,
): event is RoomEvent<UploadedImageEvent> {
  return isValidEvent(
    event,
    ROOM_EVENT_UPLOADED_IMAGE,
    uploadedImageEventSchema,
  );
}
