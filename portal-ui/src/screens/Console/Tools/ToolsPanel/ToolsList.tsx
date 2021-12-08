// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { Fragment } from "react";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import Grid from "@mui/material/Grid";

import {
  actionsTray,
  containerForHeader,
  searchField,
} from "../../Common/FormComponents/common/styleLibrary";
import PageHeader from "../../Common/PageHeader/PageHeader";
import SettingsCard from "../../Common/SettingsCard/SettingsCard";
import PageLayout from "../../Common/Layout/PageLayout";
import { IElement } from "../types";
import {
  DiagnosticsIcon,
  HealIcon,
  LogsIcon,
  SearchIcon,
  TraceIcon,
  WatchIcon,
} from "../../../../icons";
import { hasPermission } from "../../../../common/SecureComponent/SecureComponent";
import {
  CONSOLE_UI_RESOURCE,
  IAM_SCOPES,
} from "../../../../common/SecureComponent/permissions";
import SpeedtestIcon from "../../../../icons/SpeedtestIcon";

interface IConfigurationOptions {
  classes: any;
}

const styles = (theme: Theme) =>
  createStyles({
    settingsOptionsContainer: {
      display: "flex" as const,
      flexDirection: "row" as const,
      justifyContent: "flex-start" as const,
      flexWrap: "wrap" as const,
      border: "#E5E5E5 1px solid",
      borderRadius: 2,
      padding: 5,
      backgroundColor: "#fff",
    },
    ...searchField,
    ...actionsTray,
    ...containerForHeader(theme.spacing(4)),
  });

const ToolsList = ({ classes }: IConfigurationOptions) => {
  const configurationElements: IElement[] = [
    {
      icon: <LogsIcon />,
      configuration_id: "logs",
      configuration_label: "Logs",
      disabled: !hasPermission(CONSOLE_UI_RESOURCE, [
        IAM_SCOPES.ADMIN_CONSOLE_LOG_ACTION,
      ]),
    },
    {
      icon: <SearchIcon />,
      configuration_id: "audit-logs",
      configuration_label: "Audit Logs",
    },
    {
      icon: <WatchIcon />,
      configuration_id: "watch",
      configuration_label: "Watch",
    },
    {
      icon: <TraceIcon />,
      configuration_id: "trace",
      configuration_label: "Trace",
      disabled: !hasPermission(CONSOLE_UI_RESOURCE, [
        IAM_SCOPES.ADMIN_TRACE_ACTION,
      ]),
    },
    {
      icon: <HealIcon />,
      configuration_id: "heal",
      configuration_label: "Heal",
      disabled: !hasPermission(CONSOLE_UI_RESOURCE, [
        IAM_SCOPES.ADMIN_HEAL_ACTION,
      ]),
    },
    {
      icon: <DiagnosticsIcon />,
      configuration_id: "diagnostics",
      configuration_label: "Diagnostics",
      disabled: !hasPermission(CONSOLE_UI_RESOURCE, [
        IAM_SCOPES.ADMIN_HEALTH_ACTION,
      ]),
    },
    {
      icon: <SpeedtestIcon />,
      configuration_id: "speedtest",
      configuration_label: "Speedtest",
      disabled: !hasPermission(CONSOLE_UI_RESOURCE, [
        IAM_SCOPES.ADMIN_HEAL_ACTION,
      ]),
    },
  ];

  return (
    <Fragment>
      <PageHeader label={"Tools"} />
      <PageLayout>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <div className={classes.settingsOptionsContainer}>
              {configurationElements.map((element) => (
                <SettingsCard
                  prefix={"tools"}
                  configuration={element}
                  key={`configItem-${element.configuration_label}`}
                  disabled={element.disabled || false}
                />
              ))}
            </div>
          </Grid>
        </Grid>
      </PageLayout>
    </Fragment>
  );
};

export default withStyles(styles)(ToolsList);
